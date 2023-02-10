import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function App() {
  const initialTransactions = [
    {
      category: 'Housing',
      description: 'Rent for January',
      amount: 1000,
    },
    {
      category: 'Transportation',
      description: 'Gas for the month',
      amount: 200,
    },
    {
      category: 'Food',
      description: 'Grocery expenses for the month',
      amount: 500,
    },
    {
      category: 'Income',
      description: 'January salary',
      amount: 5000,
    },
    {
      category: 'Income',
      description: 'Dividends from stocks',
      amount: 300,
    },
    {
      category: 'Income',
      description: 'Income from freelance project',
      amount: 800,
    },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let newTotalIncome = 0;

    for (const transaction of transactions) {
      if (transaction.category === 'Income') {
        newTotalIncome += transaction.amount;
      }
    }

    setTotalIncome(newTotalIncome);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 30, color: '#000'}}>Savings Sensei</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          {transactions.map(transaction => (
            <Text
              style={
                (styles.headings,
                transaction.category === 'Income'
                  ? {color: 'green'}
                  : {color: 'red'})
              }>
              {transaction.category}
              {'\n'}${transaction.amount}
            </Text>
          ))}
          <Text style={{color: 'green'}}>Total Income = ${totalIncome}</Text>
        </View>
      </ScrollView>
      <View>
        <TextInput style={styles.input} />
        <Button title="Submit" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 2,
  },
  headings: {
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 5,
    padding: 20,
  },
});
