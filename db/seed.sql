create table users (
    user_id serial primary key,
    username varchar(250),
    password varchar(250)
);

create table students (
    student_id serial primary key,
    first_name varchar(200),
    last_name varchar(200),
    student_email text,
    major varchar(250),
    gender varchar(10),
    summary text
);

create table teachers (
    teacher_id serial primary key,
    first_name varchar(200),
    last_name varchar(200),
    teacher_email text,
    degree varchar(250),
    gender varchar(10),
    summary text
);

create table courses (
    course_id serial primary key,
    name varchar(200)
);



-- Alter table
alter table courses
add column max_students INT,
add column summary text;



-- Patterns many to many
create table classes (
    teacher_id int,
    student_id int,
    course_id int,
    foreign key (teacher_id) references teachers(teacher_id),
    foreign key (student_id) references students(student_id),
    foreign key (course_id) references courses(course_id)
);


-- Sub-queries
select c.name from courses c where c.course_id in (select course_id from courses where max_students > 40);

-- or