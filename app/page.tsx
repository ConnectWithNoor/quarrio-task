import { StepContainer } from './{components}';

import fetchData from './{utils}/fetchData';

import './{styles}/style.css';

export default async function Home() {
  const data = await fetchData();
  return (
    <main className='main'>
      <h1>Welcome to Querrio</h1>
      <p>Complete our 5 steps to proceed</p>
      <StepContainer respData={data} />
    </main>
  );
}
