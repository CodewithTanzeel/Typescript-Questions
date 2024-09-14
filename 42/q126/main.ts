const myObject = {
  property: "john",
  outerMethod: function () {
    console.log(this.property);

    const innerMethod = () => {
      console.log(this.property);
    };

    innerMethod();
  },
};

myObject.outerMethod();