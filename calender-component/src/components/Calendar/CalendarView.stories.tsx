import { CalendarView } from './CalendarView';
import { Meta, StoryObj } from '@storybook/react';
import { CalendarEvent } from '@/types';

const meta: Meta<typeof CalendarView> = {
  title: 'Components/CalendarView',
  component: CalendarView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CalendarView>;

const sampleEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    description: 'Weekly sync with the team',
    startDate: new Date(2024, 9, 25, 10, 0),
    endDate: new Date(2024, 9, 25, 11, 0),
    color: '#3b82f6',
    category: 'Work',
  },
  {
    id: '2',
    title: 'Project Review',
    description: 'Q4 project review',
    startDate: new Date(2024, 9, 26, 14, 0),
    endDate: new Date(2024, 9, 26, 16, 0),
    color: '#10b981',
    category: 'Meeting',
  },
];

export const MonthView: Story = {
  args: {
    events: sampleEvents,
    initialView: 'month',
    initialDate: new Date(2024, 9, 1),
  },
};

export const WeekView: Story = {
  args: {
    events: sampleEvents,
    initialView: 'week',
    initialDate: new Date(2024, 9, 1),
  },
};