import { StepsContainer } from './{components}';

import './{styles}/style.css';

export default async function Home() {
  return (
    <main className='main'>
      <h1>Welcome to Querrio</h1>
      <p>Complete our 5 steps to proceed</p>
      <StepsContainer />
    </main>
  );
}
