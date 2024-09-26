import React from 'react';
import "./styles.css";
import { Button, Card, Row } from 'antd';

function Cards({income, expense, totalBalance, showExpenseModal, showIncomeModal }) {
  return (
    <div>
      <Row className='my-row'>
        <Card bordered={true} className='my-card'>
          <h2>Current Balance</h2>
          <p>₹{totalBalance}</p>
          <Button className="custom-button">Reset Balance</Button>
        </Card>

        <Card bordered={true} className='my-card'>
          <h2>Total Income</h2>
          <p>₹{income}</p>
          <Button className="custom-button" onClick={showIncomeModal}>Add Income</Button>
        </Card>

        <Card bordered={true} className='my-card'>
          <h2>Total Expenses</h2>
          <p>₹{expense}</p>
          <Button className="custom-button" onClick={showExpenseModal}>Add Expense</Button>
        </Card>
      </Row>
    </div>
  );
}

export default Cards;
