CREATE TABLE `domains` (
	`id` varchar(12) PRIMARY KEY NOT NULL,
	`site_id` varchar(12) NOT NULL,
	`value` varchar(256) NOT NULL);

CREATE TABLE `sites` (
	`id` varchar(12) PRIMARY KEY NOT NULL,
	`name` varchar(256) NOT NULL,
	`user_id` varchar(40) NOT NULL);
