export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'GPT-4o',
    description: 'Most capable OpenAI model for general-purpose chat',
  },
  {
    id: 'chat-model-4-5',
    name: 'GPT-4.5',
    description: 'Latest OpenAI model with enhanced reasoning capabilities',
  },
  {
    id: 'chat-model-mini',
    name: 'GPT-4o mini',
    description: 'Smaller, faster model with good capability-to-cost ratio',
  },
  {
    id: 'chat-model-3-5',
    name: 'GPT-3.5 Turbo',
    description: 'Fast, cost-effective model for simpler tasks',
  },
  {
    id: 'chat-model-reasoning',
    name: 'GPT-4o with reasoning',
    description: 'OpenAI model with advanced reasoning capabilities',
  }
];
