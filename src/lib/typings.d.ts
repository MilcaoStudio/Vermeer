export type ContextAction = {
  id: string;
  label?: string;
  irreversible?: boolean;
  onclick: () => void;
};
