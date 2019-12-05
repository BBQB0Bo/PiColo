create table admins
(
admin_id int not null auto_increment,
admin_user_name varchar(100) not null,
admin_password varchar(30) not null,
primary key (admin_id)
);