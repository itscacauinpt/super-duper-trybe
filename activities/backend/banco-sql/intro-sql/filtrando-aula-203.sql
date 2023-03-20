-- 
select * from actor where first_name = 'johnny' and last_name = 'cage';
select * from actor where concat(first_name, ' ', last_name) = 'johnny cage';
select concat(first_name, ' ', last_name) from actor where concat(first_name, ' ', last_name) = 'johnny cage';
-- 
select title, rental_duration from film where rental_duration = 6;
-- 
select title, rental_duration from film where rental_duration > 5;
-- 
select title, rating, rental_duration from film where rating = 'R' and rental_duration = 6;
-- ordem de precendência -> parênteses, mult-div, sub-adic, not, and, or;
select title, rating, rental_duration from film
where rental_duration = 6 and (rating = 'R' or rating = 'PG');
-- 
select * from film
where title in ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');
-- 
select * from film
where title not in ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');
-- 
select * from film
where title <> 'ACADEMY DINOSAUR';
-- palavra reservada lenght
select title, `length` from film
where `length` between 50 and 130;
-- começa no b e para no d
select first_name from actor
where first_name between 'b' and 'd'
order by first_name  desc;
-- 
select count(rental_date) from rental
where rental_date between '2005-05-27' and '2005-05-28';
-- formato de datas
select now();
select year(now());
select day(curdate());
select date(now());
select time(now());
select date_add(now(), interval 3 day); -- dia 18
-- 
select date(rental_date) from rental;
select rental_date from rental where date(rental_date) = '2005-05-27';
-- 
select * from customer where first_name like '%fer%';
-- 
select * from customer where first_name like 'fer%';
-- 
select * from customer where first_name like 'jun%';
-- 
select * from customer where first_name like '_na';
-- 
select * from customer where first_name like '__me%';
-- 
select * from customer where first_name like '___';
-- 
select * from customer where length(first_name) = 3;
-- 
select * from customer where first_name like 'b__';
-- 
select * from customer where first_name like 'b%';

