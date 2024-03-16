CREATE DATABASE LIBRARY;
USE LIBRARY;
CREATE TABLE branch (
    branchID INT PRIMARY KEY,
    address VARCHAR(255),
    openHour TIME,
    closeHour TIME,
    openDay VARCHAR(50)
);

SELECT * FROM Member;

CREATE TABLE Admin (
    adminID INT PRIMARY KEY,
    title VARCHAR(255),
    IName VARCHAR(255),
    fName VARCHAR(255),
    age INT,
    sex CHAR(1),
    email VARCHAR(255),
    branchID INT,
    FOREIGN KEY (branchID) REFERENCES Branch(branchID)
);

CREATE TABLE Staff (
    staffID INT PRIMARY KEY,
    title VARCHAR(255),
    IName VARCHAR(255),
    fName VARCHAR(255),
    age INT,
    sex CHAR(1),
    email VARCHAR(255),
    branchID INT,
    hiredBy INT,
    FOREIGN KEY (branchID) REFERENCES Branch(branchID),
    FOREIGN KEY (hiredBy) REFERENCES Admin(adminID)
);
CREATE TABLE Member (
    memberID INT PRIMARY KEY AUTO_INCREMENT,
    fName VARCHAR(255),
    lName VARCHAR(255),
    age INT,
    sex CHAR(1),
    DOB DATE,
    email VARCHAR(255),
    status VARCHAR(255),
    hold BOOLEAN
);
CREATE TABLE Book (
    ISBN VARCHAR(13) PRIMARY KEY,
    genre VARCHAR(255),
    title VARCHAR(255),
    location VARCHAR(255),
    status VARCHAR(50),
    publishedBy VARCHAR(255),
    writtenBy VARCHAR(255),
    language VARCHAR(50),
    shelf VARCHAR(50)
);

CREATE TABLE Request (
    requestID INT PRIMARY KEY AUTO_INCREMENT,
    memberID INT,
    status VARCHAR(50),
    staffID INT,
    date DATE,
    time TIME,
    branchID INT,
    FOREIGN KEY (memberID) REFERENCES Member(memberID),
    FOREIGN KEY (staffID) REFERENCES Staff(staffID),
    FOREIGN KEY (branchID) REFERENCES Branch(branchID)
);
CREATE TABLE `Order` (
    orderID INT PRIMARY KEY AUTO_INCREMENT,
    requestID INT,
    ISBN VARCHAR(20),
    borrowDate DATE,
    returnDate DATE,
    status VARCHAR(50),
    dueDate DATE,
    accuredFine DECIMAL(10, 2),
    FOREIGN KEY (requestID) REFERENCES Request(requestID)
);

CREATE TABLE Credential (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    assignedBy INT,
    staffID INT,
    memberID INT,
    FOREIGN KEY (assignedBy) REFERENCES Staff(staffID),
    FOREIGN KEY (staffID) REFERENCES Staff(staffID),
    FOREIGN KEY (memberID) REFERENCES Member(memberID)
);

CREATE TABLE WrittenBy (
    isbn VARCHAR(255),
    authorID INT,
    PRIMARY KEY (isbn, authorID),
    FOREIGN KEY (isbn) REFERENCES Book(ISBN),
    FOREIGN KEY (authorID) REFERENCES Author(authorID)
);

CREATE TABLE Author (
    authorID INT PRIMARY KEY,
    fName VARCHAR(255),
    lName VARCHAR(255)
);

INSERT INTO Book (ISBN, genre, title, location, status, publishedBy, writtenBy, language, shelf) VALUES
('9780345342966', 'Science Fiction', 'The Hitchhiker''s Guide to the Galaxy', 'Fiction Section', 'Available', 'Ballantine Books', 'Douglas Adams', 'English', 'A1'),
('9780547928227', 'Fantasy', 'Harry Potter and the Sorcerer''s Stone', 'Young Adult Section', 'Available', 'Arthur A. Levine Books', 'J.K. Rowling', 'English', 'B2'),
('9780062316097', 'Thriller', 'The Girl on the Train', 'Mystery Section', 'Available', 'Riverhead Books', 'Paula Hawkins', 'English', 'C3'),
('9780142000670', 'Classics', 'To Kill a Mockingbird', 'Fiction Section', 'Available', 'Harper Perennial Modern Classics', 'Harper Lee', 'English', 'A2'),
('9780385376716', 'Young Adult', 'The Hunger Games', 'Young Adult Section', 'Available', 'Scholastic Press', 'Suzanne Collins', 'English', 'B1'),
('9780451524935', 'Classic Literature', '1984', 'Fiction Section', 'Available', 'Signet Classics', 'George Orwell', 'English', 'A3'),
('9780446310789', 'Mystery', 'Gone Girl', 'Mystery Section', 'Available', 'Broadway Books', 'Gillian Flynn', 'English', 'C1'),
('9780141439563', 'Literary Fiction', 'Pride and Prejudice', 'Fiction Section', 'Available', 'Penguin Classics', 'Jane Austen', 'English', 'A4'),
('9780061120084', 'Science Fiction', 'Ender''s Game', 'Young Adult Section', 'Available', 'Tor Books', 'Orson Scott Card', 'English', 'B3'),
('9780765326355', 'Fantasy', 'A Game of Thrones', 'Fantasy Section', 'Available', 'Bantam Books', 'George R.R. Martin', 'English', 'D1');


SELECT * FROM Book;

INSERT INTO Member (memberID, fName, lName, age, sex, DOB, email, status, hold)
VALUES
    (1, 'John', 'Doe', 30, 'M', '1992-05-15', 'john@exaMembermple.com', 'Active', false),
    (2, 'Jane', 'Smith', 25, 'F', '1997-10-22', 'jane@example.com', 'Active', false),
    (3, 'Michael', 'Johnson', 28, 'M', '1994-03-08', 'michael@example.com', 'Active', false),
    (4, 'Emily', 'Brown', 35, 'F', '1989-12-17', 'emily@example.com', 'Active', false),
    (5, 'David', 'Wilson', 32, 'M', '1990-09-25', 'david@example.com', 'Active', false),
    (6, 'Jessica', 'Martinez', 27, 'F', '1995-06-12', 'jessica@example.com', 'Active', false),
    (7, 'Matthew', 'Taylor', 29, 'M', '1993-08-03', 'matthew@example.com', 'Active', false),
    (8, 'Sarah', 'Anderson', 31, 'F', '1991-04-20', 'sarah@example.com', 'Active', false),
    (9, 'Daniel', 'Thomas', 26, 'M', '1996-11-09', 'daniel@example.com', 'Active', false),
    (10, 'Amanda', 'Hernandez', 33, 'F', '1988-07-28', 'amanda@example.com', 'Active', false);

SELECT * FROM Member;
 
SET FOREIGN_KEY_CHECKS = 0;
ALTER TABLE `Member` DROP PRIMARY KEY; 
ALTER TABLE `Member` MODIFY `memberID` INT NOT NULL AUTO_INCREMENT;
SET FOREIGN_KEY_CHECKS = 1;

ALTER TABLE Member MODIFY COLUMN password VARCHAR(256);

ALTER

