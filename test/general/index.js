LAID.run( {
  Header: {
    props: {
      left: 0,
      centerY: LAID.take('/', 'centerY'),
      width: 300,
      height: LAID.take('/', 'height').divide(2),
      backgroundColor: "gainsboro"
    },

    children: {
      'One': {
        props: {
          left: 0,
          top: 0,
          text:"Hello Waldo"
        }
      }
    },
  },
  Content: {
    children: {


    }
  }
});
