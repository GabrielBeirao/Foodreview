-- Active: 1681945846296@@127.0.0.1@3306
    CREATE DATABASE foodreview;

    CREATE USER 'foodreview'@'localhost' IDENTIFIED BY 'foodreview';

    GRANT ALL PRIVILEGES ON foodreview.* TO 'foodreview'@'localhost';