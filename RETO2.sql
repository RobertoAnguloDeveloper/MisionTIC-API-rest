--GET
SELECT * FROM CLIENT ORDER BY ID;

--POST
BEGIN
    INSERT INTO CLIENT(ID, NAME, EMAIL, AGE) 
    VALUES(:id,:name, :email, :age);
    :status_code:= 201;
END;

--PUT
BEGIN
    UPDATE CLIENT SET ID = :id, NAME = :name, EMAIL = :email, 
    AGE = :age WHERE ID = :id;
    :status_code:= 201;
END;

--DELETE
BEGIN
    DELETE FROM CLIENT WHERE ID = :id;
    :status_code:= 204;
END;

--GET
SELECT * FROM CLIENT WHERE ID = :id

--GET
SELECT * FROM MESSAGE;

--POST
BEGIN
    INSERT INTO MESSAGE(ID, MESSAGETEXT) VALUES(:id,:messagetext);
    :status_code:= 201;
END;

--PUT
BEGIN
    UPDATE MESSAGE SET ID = :id, MESSAGETEXT = :messagetext WHERE ID = :id;
    :status_code:= 201;
END;

--DELETE
BEGIN
    DELETE FROM MESSAGE WHERE ID = :id;
    :status_code:= 204;
END;

--GET
SELECT * FROM MESSAGE WHERE ID = :id;