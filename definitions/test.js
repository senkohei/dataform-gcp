let num = 'test_table';

publish("test").query("SELECT 1 AS test").type("table");

//declare({
//  schema: "rawdata",
//  name: "input1"
//});

//assert("assertion1").query("SELECT * FROM `argolis-demo-project.bigquery_handson.titanic`");

//operate("operation1").queries("INSERT INTO some_table (test) VALUES (2)");

//test("test1")
//  .dataset("some_table")
//  .input("input_data", "SELECT 1 AS test")
//  .expect("SELECT 1 AS test");