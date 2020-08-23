import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class Details extends React.Component {
  useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });

  render() {
    return (
      <div>
        <h1>Let's Track the expenses</h1>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              {/* <table>
          <thead> */}
              {/* <th>id</th>
            <th>Amount</th>
            <th>Name</th> */}
              {/* <th>Balance</th> */}
              {/* <th>Credit/Debit</th> */}
              {/* </thead> */}
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Credit/Debit</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <tbody> */}
              {this.props.expenseArray.map((expense) => {
                return (
                  <TableRow key={expense.id}>
                    {/* <tr key={expense.id}> */}
                    {/* <td>{expense.id}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.value}</td> */}
                    {/* <td>{expense.balance}</td> */}
                    {/* <td>{expense.type}</td> */}
                    <TableCell align="right">{expense.id}</TableCell>
                    <TableCell align="right">{expense.amount}</TableCell>
                    <TableCell align="right">{expense.value}</TableCell>
                    <TableCell align="right">{expense.type}</TableCell>
                    <TableCell align="right">
                      {" "}
                      <button
                        onClick={() => this.props.deleteExpense(expense.id)}
                      >
                        Delete
                      </button>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <button
                        onClick={() => this.props.editExpense(expense.id)}
                      >
                        Edit
                      </button>
                    </TableCell>

                    {/* <td>
                    <button
                      onClick={() => this.props.deleteExpense(expense.id)}
                    >
                      Delete
                    </button>
                    <button onClick={() => this.props.editExpense(expense.id)}>
                      Edit
                    </button>
                  </td> */}
                    {/* </tr> */}
                  </TableRow>
                );
              })}
              {/* </tbody>
        </table> */}
            </TableBody>
          </Table>
        </TableContainer>
        <h2>{this.props.balance}</h2>
      </div>
    );
  }
}

export default Details;
