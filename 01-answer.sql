-- Jawaban 1.A
SELECT policy.* FROM t_policy policy
JOIN t_client client ON policy.client_number = client.client_number
WHERE policy.policy_submit_date > '2018-01-15' AND EXTRACT(MONTH FROM client.birth_date) = 9

-- Jawaban 1.B
SELECT * from t_policy policy
JOIN t_agent agent ON policy.agent_code = agent.agent_code
WHERE policy.policy_status = 'INFORCE' AND agent.agent_office = 'JAKARTA'

-- Jawaban 1.C
CREATE OR REPLACE PROCEDURE UpdateBasicCommission()
LANGUAGE plpgsql
AS $$
DECLARE
	rec_data RECORD;
	cur_data CURSOR FOR
	SELECT agent_code, SUM(premium) as premium, SUM(commission) as commission FROM t_policy GROUP BY agent_code;
BEGIN
	OPEN cur_data;
	LOOP
	FETCH cur_data INTO rec_data;
	EXIT WHEN NOT FOUND;
	UPDATE t_agent 
	SET 
	basic_commission = rec_data.commission / rec_data.premium * 100
	WHERE
	agent_code = rec_data.agent_code;
	END LOOP;
END; $$

call UpdateBasicCommission()

-- Jawaban 1.D
CREATE OR REPLACE PROCEDURE UpdatePolicyDueDate()
LANGUAGE plpgsql
AS $$
DECLARE
	rec_data RECORD;
	cur_data CURSOR FOR
	SELECT policy_number, policy_submit_date, date_trunc('MONTH',policy_submit_date+30) + INTERVAL '1 MONTH - 1 DAY' as policy_due_date FROM t_policy;
BEGIN
	OPEN cur_data;
	LOOP
	FETCH cur_data into rec_data;
	EXIT WHEN NOT FOUND;
	UPDATE t_policy
	SET
	policy_due_date = rec_data.policy_due_date
	WHERE
	policy_number = rec_data.policy_number;
	END LOOP;
END; $$

CALL UpdatePolicyDueDate()

-- Jawaban 1.E
SELECT * FROM t_policy WHERE (premium-(premium*discount/100)) < 1000000