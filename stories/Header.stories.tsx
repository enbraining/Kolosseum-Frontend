import Header from '../app/service/components/Header';

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
