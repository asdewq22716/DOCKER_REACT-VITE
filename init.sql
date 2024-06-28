GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';

CREATE TABLE IF NOT EXISTS user_patiend (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idcard VARCHAR(13),
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    age INT
);

-- แทรกข้อมูลคนที่ 1
INSERT INTO user_patiend (idcard, firstname, lastname, age)
VALUES ('1234567890123', 'John', 'Doe', 30);

-- แทรกข้อมูลคนที่ 2
INSERT INTO user_patiend (idcard, firstname, lastname, age)
VALUES ('9876543210987', 'Jane', 'Smith', 25);

-- แทรกข้อมูลคนที่ 3
INSERT INTO user_patiend (idcard, firstname, lastname, age)
VALUES ('5678901234567', 'Michael', 'Johnson', 40);

