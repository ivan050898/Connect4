create database juego
go
use juego
go

CREATE TABLE Partida (
    id int identity primary key,
    Jugador1 varchar(255) not null,
    Jugador2 varchar(255) not null,
    HoraFecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Resultado varchar(255),
	Duracion varchar(255),
	movimientos int , 
	Estado bit default 0
);

go

CREATE PROCEDURE CrearPartida(@Jugador1 varchar(255),@Jugador2 varchar(255)) AS
	insert into Partida(Jugador1,Jugador2) values (@Jugador1, @Jugador2 )
	select SCOPE_IDENTITY() as id
GO

go

CREATE PROCEDURE editarPartida(@id int,@resultado varchar(255),@duracion varchar(255),@movimientos int) AS
	update Partida 
	set Resultado=@resultado,
	Duracion=@duracion,
	movimientos=@movimientos,
	Estado = 1 
	where id=@id

GO


create  view CincoMayorVictoria as
	select  count(*) victorias,Resultado from Partida 
	where  Resultado <> ''
	group by  Resultado
go

create  view MenorMovimientos as
	select top(1) Resultado,movimientos from Partida 
	where  Resultado <> ''
	order by movimientos asc
go


create  view JugadoresEmpate as
	select * from (select   jugador1 as jugadores from Partida  where  Resultado = ''
	union
	select   jugador2  from Partida where  Resultado = '' ) t1
go
 

/*drop database juego*/
