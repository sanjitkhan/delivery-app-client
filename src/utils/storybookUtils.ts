import { Meta, Story } from "@storybook/react/types-6-0";
import 'semantic-ui-css/semantic.min.css';
import { addAllProviders } from "./testUtils";

export const addStoryBookElementMeta = (name: string, Component: any) => {
  return {
    title: name,
    component: Component,
  } as Meta;
};

export const addStoryBookElementTemplate = (data: any, Component: any) => {
  const Template: Story<typeof data> = (args) => addAllProviders({component: Component(args)});  
  const story = Template.bind({});
  story.args = data;
  return story;
};
