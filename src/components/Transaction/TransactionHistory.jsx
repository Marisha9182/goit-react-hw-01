import '../Transaction/transactionStyle.css';

const TransactionHistory = ( {items} ) => {
  return (
    <table className='table'>
      <thead>
        <tr className='titleTable'>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className='tablesInformation'>
          {items.map((item) => (
            <tr key = {item.id}>
              <td className='item-type'>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
