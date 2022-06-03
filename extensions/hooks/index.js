export default ({ filter }, { exceptions }) => {
  const { InvalidPayloadException } = exceptions;

  filter('items.create', async (input) => {
    console.log(input);
    throw new InvalidPayloadException('BOOOM!');

    return input;
  });
};
