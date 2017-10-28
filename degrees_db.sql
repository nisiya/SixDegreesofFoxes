--#create database
DROP DATABASE IF EXISTS degrees_db;
CREATE DATABASE degrees_db;
USE degrees_db;


DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Non_profits;
DROP TABLE IF EXISTS Challenges;
DROP TABLE IF EXISTS Actions;
DROP TABLE IF EXISTS ChallengeActions;
DROP TABLE IF EXISTS UserInvites;
DROP TABLE IF EXISTS UserParticipations;

CREATE TABLE IF NOT EXISTS Users(
    user_id INT AUTO_INCREMENT,
    first_name TEXT,
    last_name TEXT,
    user_email TEXT,
    user_pass TEXT,
    PRIMARY KEY (user_id)
);
show tables;
select * from Users;

CREATE TABLE IF NOT EXISTS Non_profits(
    np_id INT AUTO_INCREMENT,
    np_name TEXT,
    np_email TEXT,
    np_pass TEXT,
    summary TEXT,
    PRIMARY KEY (np_id)
);

CREATE TABLE IF NOT EXISTS Actions(
    a_id INT AUTO_INCREMENT,
    a_name TEXT,
    val INT,
    PRIMARY KEY (a_id)
);

CREATE TABLE IF NOT EXISTS Challenges(
    c_id INT AUTO_INCREMENT,
    c_name TEXT,
    user_id INT,
    np_id INT,
    PRIMARY KEY (c_id)
);

ALTER TABLE Challenges
    ADD FOREIGN KEY (user_id) REFERENCES Users (user_id);
ALTER TABLE Challenges
    ADD FOREIGN KEY (np_id) REFERENCES Non_profits (np_id);


CREATE TABLE IF NOT EXISTS ChallengeActions(
    c_id INT,
    a_id INT,
    PRIMARY KEY (c_id, a_id)
);

ALTER TABLE ChallengeActions
    ADD FOREIGN KEY (c_id) REFERENCES Challenges (c_id);
ALTER TABLE ChallengeActions
    ADD FOREIGN KEY (a_id) REFERENCES Actions (a_id);

CREATE TABLE IF NOT EXISTS UserInvites(
    user_id1 INT,
    user_id2 INT,
    c_id INT,
    PRIMARY KEY (user_id1, user_id2, c_id)
);

ALTER TABLE UserInvites
    ADD FOREIGN KEY (user_id1) REFERENCES Users (user_id);
ALTER TABLE UserInvites
    ADD FOREIGN KEY (user_id2) REFERENCES Users (user_id);
ALTER TABLE UserInvites
    ADD FOREIGN KEY (c_id) REFERENCES Challenges (c_id);

CREATE TABLE IF NOT EXISTS UserParticipations(
    user_id INT,
    c_id INT,
    a_id INT,
    ContrVal INT,
    degreeID TEXT,
    PRIMARY KEY (user_id, c_id, a_id)
);

ALTER TABLE UserParticipations
    ADD FOREIGN KEY (user_id) REFERENCES Users (user_id);
ALTER TABLE UserParticipations
    ADD FOREIGN KEY (c_id) REFERENCES Challenges (c_id);
ALTER TABLE UserParticipations
    ADD FOREIGN KEY (a_id) REFERENCES Actions (a_id);


INSERT INTO Users (first_name, last_name, user_email, user_pass)
    VALUES('Kai', 'Wong', 'kai.wong1@marist.edu', 'kaiWong1'),
        ('Wendy', 'Ni', 'si.ni1@marist.edu', 'wendyNi1'),
        ('Dayna', 'Eidle', 'dayna.eidle1@marist.edu', 'daynaEidle1'),
        ('Kai3', 'Wong3', 'kai.wong1@marist.edu', 'kaiWong3'),
        ('Wendy2', 'Ni2', 'si.ni2@marist.edu', 'wendyNi2'),
        ('Dayna2', 'Eidle2', 'dayna.eidle2@marist.edu', 'daynaEidle2'),
        ('Kai2', 'Wong2', 'kai.wong2@marist.edu', 'kaiWong2'),
        ('Jess', 'Ni', 'Jess.ni1@marist.edu', 'JessNi1'),
	('Kai', 'Eidle', 'Kai.eidle1@marist.edu', 'KaiEidle1'),
        ('Wendy', 'Wong', 'Wendy.wong1@marist.edu4', 'WendyWong1'),
        ('Jamie', 'Nie', 'Jamie.nie@marist.edu', 'JamieNie1'),
        ('Katy', 'Eidle', 'Katy.eidle1@marist.edu', 'KatyEidle1'),
        ('Tyler', 'Wong', 'tyler.wong1@marist.edu', 'TylerWong1'),
        ('Jess', 'Rieger', 'Jess.Rieger1@marist.edu', 'JessRieger1'),
       ('Wendy', 'Whel', 'Wendy.whel1@marist.edu', 'WendyWhel1'),
('Wendy', 'Whelan', 'Wendy.whelan1@marist.edu', 'WendyWhelan1');


INSERT INTO Actions (a_name, val)
	VALUES ('Volunteer', 10), ('Donate', 5), ('Shout out', 1);

INSERT INTO Non_profits (np_name, np_email, np_pass, summary)
	VALUES ('Happy Hounds', 'happy.hounds@gmail.com', 'hounds', 'This is a rescue shelter'),
	       ('Teachers for Poughkeepsie', 'teachers.poughtown@gmail.com', '2345', 'This raises money for the teachers in Poughkeepsie.'),
               ('Food Shelter', 'food.shelter@gmail.com', '1234', 'This is to encourage volunteers to contribute 10 hours.');
INSERT INTO Challenges (c_name, user_id, np_id)
	VALUES ('Help Hounds', 3, 1),
	       ('Volunteer 10', 4, 3),
	       ('FundAClass', 1, 2);

INSERT INTO ChallengeActions (c_id, a_id)
	VALUES (1, 1),
	       (1, 3),
	       (2, 1),
	       (3, 2);

INSERT INTO UserParticipations(user_id, c_id, a_id, ContrVal, degreeID)
	VALUES (1, 2, 1, 10, '0'),
	       (4, 2, 1, 10, '01'),
	       (5, 2, 2, 60, '012'),
	       (8, 2, 2, 7, '02'),
	       (14, 2, 2, 10, '0121');

INSERT INTO UserInvites(user_id1, user_id2, c_id)
	VALUES (1, 4, 2),
	       (1, 8, 2),
	       (4, 3, 2),
	       (4, 5, 2),
	       (5, 14, 2),
	       (8, 6, 2);

show tables;

--#query to get longest

Select len(degreeID) from Userparticipations where c_id = 2;


