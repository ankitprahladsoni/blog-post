export default {
  id: 1,
  components: [
    {
      type: 'subHeading',
      value: 'What is it?',
    },
    {
      type: 'paragraph',
      value: `In the Proxy pattern, a surrogate/wrapper/proxy holds the instance of a real object and acts as an interface to the outside world. This helps in caching the real object, add a security layer, or slightly modify the functionality of the real object.`,
    },
    {
      type: 'paragraph',
      value: `They are further divided into <ul>
        <li>Virtual Proxy: caching an object which is expensive to create.</li>
        <li>Remote Proxy: acts as a local representation of an object which may reside on a different machine, heap or location.</li>
        <li>Protection Proxy: adds security to check if the client has access to call the real object or not.</li>
        </ul>
        <br/>
        Let's take an example to understand Virtual Proxy.`,
    },
  ],
};
