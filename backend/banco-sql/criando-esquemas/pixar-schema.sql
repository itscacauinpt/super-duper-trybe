drop schema if exists Pixar;
create schema Pixar;
use Pixar;

create table movies (
  id integer auto_increment primary key not null,
  title varchar(45) not null,
  director varchar(45) not null,
  year int not null,
  length_min int not null
  );
  
  create table box_office (
    movie_id integer,
    foreign key (movie_id) references movies (id),
    rating decimal(2, 1) not null,
    domestic_sales int not null,
    internacional_sales int not null
   );
    
   insert into movies(title, director, year, length_min)
   values ('Toy Story', 'John Lasseter', 1995, 81),
          ('Vida de inseto', 'Andrew Staton', 1998, 95),
          ('ratatui', 'Brad Bird', 2010, 115),
          ('UP', 'Pete Docter', 2009, 101),
          ('Carros', 'John Lasseter', 2006, 117),
          ('Toy Story 2', 'John Lasseter', 1999, 93),
          ('Valente', 'Brenda Chapman', 2012, 98);
          
insert into box_office(movie_id, rating, domestic_sales, internacional_sales)
values (1, 8.3, 190000000, 170000000),
       (2, 7.2, 160000000, 200600000),
       (3, 7.9, 245000000, 239000000),
       (4, 6.1, 330000000, 540000000),
       (5, 7.8, 140000000, 310000000),
       (6, 5.8, 540000000, 600000000),
       (7, 7.5, 250000000, 190000000);




