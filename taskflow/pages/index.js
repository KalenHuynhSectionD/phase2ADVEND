import Layout from '../components/Layout';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <Layout>
      <h1>Task Dashboard</h1>
      <TaskInput />
      <TaskList />
    </Layout>
  );
}