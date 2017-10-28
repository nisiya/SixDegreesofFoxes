--#create database
DROP DATABASE IF EXISTS degrees_db;
CREATE DATABASE degrees_db;
USE degrees_db;

--#drop tables
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
    email TEXT,
    pass TEXT,
    PRIMARY KEY (user_id)
);
show tables;
select * from Users;

CREATE TABLE IF NOT EXISTS Non_profits(
    np_id INT AUTO_INCREMENT,
    np_name TEXT,
    email TEXT,
    pass TEXT,
    summary TEXT,
    PRIMARY KEY (np_id)
);
CREATE TABLE IF NOT EXISTS Challenges(
    c_id INT AUTO_INCREMENT,
    c_name VARCHAR(255),
    u_id INT,
    np_id INT,
    PRIMARY KEY (c_id)
);

ALTER TABLE Challenges
    ADD FOREIGN KEY (u_id) REFERENCES Users (u_id);
ALTER TABLE Challenges
    ADD FOREIGN KEY (a_id) REFERENCES Actions (a_id);

CREATE TABLE IF NOT EXISTS Actions(
    a_id INT AUTO_INCREMENT,
    a_name TEXT,
    val INT,
    PRIMARY KEY (a_id)
);
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
    u_id1 INT,
    u_id2 INT,
    c_id INT,
    PRIMARY KEY (u_id1, u_id2, c_id)
);

ALTER TABLE UserInvites
    ADD FOREIGN KEY (u_id1) REFERENCES Users (u_id);
ALTER TABLE UserInvites
    ADD FOREIGN KEY (u_id2) REFERENCES Users (u_id);
ALTER TABLE UserInvites
    ADD FOREIGN KEY (c_id) REFERENCES Challenges (c_id);

CREATE TABLE IF NOT EXISTS UserParticipations(
    u_id INT,
    c_id INT,
    a_id INT,
    ContrVal INT,
    PRIMARY KEY (u_id, c_id, a_id)
);

ALTER TABLE UserParticipations
    ADD FOREIGN KEY (u_id) REFERENCES Users (u_id);
ALTER TABLE UserParticipations
    ADD FOREIGN KEY (c_id) REFERENCES Challenges (c_id);
ALTER TABLE UserParticipations
    ADD FOREIGN KEY (a_id) REFERENCES Actions (c_id);


INSERT INTO Users (first_name, last_name, email, pass)
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


INSERT INTO Actions (a_name)
	VALUES ('Volunteer'), ('Donate'), ('Shout out');

INSERT INTO Non_profits (np_name, email, pass, summary)
	VALUES ('Happy Hounds', 'happy.hounds@gmail.com', 'hounds', 'This is a rescue shelter'),
	       ('Teachers for Poughkeepsie', 'teachers.poughtown@gmail.com', '2345', 'This raises money for the teachers in Poughkeepsie.'),
               ('Food Shelter', 'food.shelter@gmail.com', '1234', 'This is to encourage volunteers to contribute 10 hours.');
INSERT INTO Challenges (c_name, u_id, np_id)
	VALUES ('Help Hounds', 3, 1),
	       ('Volunteer 10', 4, 3),
	       ('FundAClass', 1, 2);

INSERT INTO ChallengeActions (c_id, a_id, ActionVal)
	VALUES (1, 1, 10),
	       (1, 3, 5),
	       (2, 1, 10),
	       (3, 2, 1);

INSERT INTO UserParticipation(u_id, c_id, a_id, ContrVal)
	VALUES (4, 1, 1, 10)
	       (7, 2, 1, 10),
	       (9, 3, 2, 60),
	       (6, 3, 2, 7),
	       (3, 1, 3, 15);

INSERT INTO UserInvites(u_id1, u_id2, c_id)
	VALUES (2, 4, 2),
	       (1, 8, 3),
	       (6, 3, 2),
	       (11, 10, 1),
	       (7, 4, 2),
	       (14, 12, 1),
	       (14, 1, 2),
	       (1, 8, 1);

Select * from UserInvites;
Select * from UserParticipation;
Select * from ChallengeActions;

select * from Actions;
select * from Challenges;
select * from Non_profits;

select * from Users;
