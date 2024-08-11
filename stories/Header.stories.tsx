import Header from '../components/Header';

export default {
  component: Header,
  title: 'Header',
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

const Template = () => <Header />;

export const Default = Template.bind({});
