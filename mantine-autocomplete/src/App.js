import { Autocomplete } from '@mantine/core';

const AutocompleteField = ({ label, placeholder, data }) => (
  <Autocomplete
    label={label}
    placeholder={placeholder}
    data={data}
  />
);

export default function App() {
  return (
    <div className="container mx-auto p-8">
      <AutocompleteField
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  );
}
