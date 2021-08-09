import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Form from '../src/components/form/Form';

it('should run the function when the button is clicked', async () => {
  let callApi = jest.fn();
  render(<Form handleApiCall={callApi} />);
  const button = screen.getByTestId('submitButton');
  fireEvent.click(button);
  await waitFor(() => expect(callApi).toHaveBeenCalled());
});
