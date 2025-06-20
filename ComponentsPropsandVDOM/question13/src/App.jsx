import { useState } from 'react';

function App() {
  const [plans] = useState([
    {
      title: 'Starter',
      price: 'Free',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      buttonStyle: 'gray',
    },
    {
      title: 'Lorem Plus',
      price: '$32.00',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      buttonStyle: 'purple',
    },
    {
      title: 'Lorem Pro',
      price: '$50.00',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      buttonStyle: 'gray',
    },
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>
        The Right Plan for <span style={{ color: 'purple' }}>Your Business</span>
      </h2>
      <p style={{ maxWidth: '600px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis
        magnam, sed officiis commodi labore odit.
      </p>

      <hr />

      {plans.map((plan, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            padding: '1rem 0',
          }}
        >
          <div>
            <h3>{plan.title}</h3>
            <ul>
              {plan.features.map((feat, i) => (
                <li key={i} style={{ listStyle: 'none' }}>
                  ✅ {feat}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h2>{plan.price}</h2>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: plan.buttonStyle === 'purple' ? '#a78bfa' : '#e5e7eb',
                border: 'none',
                borderRadius: '8px',
                color: plan.buttonStyle === 'purple' ? 'white' : '#333',
                cursor: 'pointer',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
