import React from "react";

function Content() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Understanding SQL Queries</h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-4">
          SQL (Structured Query Language) is the standard language for
          interacting with relational databases. It allows you to perform
          various operations like retrieving, inserting, updating, and deleting
          data. Let's dive into a couple of examples to see how SQL queries are
          structured and executed.
        </p>

        {/* Example 1 */}
        <h2 className="text-2xl font-semibold mb-2">
          Example 1: Selecting Data
        </h2>
        <p className="text-gray-700 mb-4">
          The following SQL query retrieves all the records from the `employees`
          table where the employee's department is "Sales":
        </p>

        <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4">
          <pre className="whitespace-pre-wrap">
            <code>
              {`SELECT * FROM employees
WHERE department = 'Sales';`}
            </code>
          </pre>
        </div>

        <p className="text-gray-700 mb-6">
          This query selects all columns from the `employees` table and filters
          the results to only include those where the `department` column has
          the value "Sales".
        </p>

        {/* Example 2 */}
        <h2 className="text-2xl font-semibold mb-2">
          Example 2: Inserting Data
        </h2>
        <p className="text-gray-700 mb-4">
          Next, consider an SQL query that inserts a new record into the
          `employees` table:
        </p>

        <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4">
          <pre className="whitespace-pre-wrap">
            <code>
              {`INSERT INTO employees (name, department, salary)
VALUES ('John Doe', 'Sales', 60000);`}
            </code>
          </pre>
        </div>

        <p className="text-gray-700 mb-6">
          This query adds a new employee named "John Doe" to the "Sales"
          department with a salary of 60,000. The `INSERT INTO` statement is
          used to add new rows to a table.
        </p>

        {/* Example 3 */}
        <h2 className="text-2xl font-semibold mb-2">
          Example 3: Updating Data
        </h2>
        <p className="text-gray-700 mb-4">
          The following SQL query updates the salary of an employee in the
          `employees` table:
        </p>

        <div className="bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4">
          <pre className="whitespace-pre-wrap">
            <code>
              {`UPDATE employees
SET salary = 70000
WHERE name = 'John Doe';`}
            </code>
          </pre>
        </div>

        <p className="text-gray-700 mb-6">
          This query modifies the salary of "John Doe" in the `employees` table,
          setting it to 70,000. The `UPDATE` statement is used to modify
          existing records in a table.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700">
          SQL is a powerful tool for managing and manipulating data in
          relational databases. These examples are just a glimpse of what you
          can achieve with SQL. As you explore more, you'll find that SQL
          provides a comprehensive set of commands to handle complex data
          operations efficiently.
        </p>
      </div>
    </div>
  );
}

export default Content;
