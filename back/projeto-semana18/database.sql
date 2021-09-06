CREATE TABLE User(  
    id int NOT NULL primary key AUTO_INCREMENT,
    create_time DATETIME COMMENT 'create time',
    update_time DATETIME COMMENT 'update time',
    [column] varchar(255) comment ''
) default charset utf8 comment '';