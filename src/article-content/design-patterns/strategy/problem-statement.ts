export default {
  id: 2,
  components: [
    {
      type: 'subHeading',
      value: 'A problem statement',
    },
    {
      type: 'paragraph',
      value:
        'We have a couple of <code>Duck</code> subclasses, namely <code>CityDuck</code> and <code>WildDuck</code>.',
    },
    {
      type: 'code',
      value: getDuck1(),
    },
    {
      type: 'code',
      value: 'public class WildDuck extends Duck { }',
    },
    {
      type: 'code',
      value: 'public class CityDuck extends Duck { }',
    },
    {
      type: 'code',
      value: `
WildDuck wildDuck = new WildDuck();
CityDuck cityDuck = new CityDuck();
System.out.println("WildDuck says: " + wildDuck.swim());
System.out.println("CityDuck says: " + cityDuck.swim());`,
    },
    {
      type: 'code',
      value: `
> WildDuck says: I'm swimming
> CityDuck says: I'm swimming`,
    },
    {
      type: 'paragraph',
      value:
        'Both <code>CityDuck</code> and <code>WildDuck</code> can swim, as we see them in real life.',
    },
    {
      type: 'paragraph',
      value:
        'If we wish to see these duck fly, we simply add a <code>fly()</code> method in the <code>Duck</code> class, and the subclasses will start to fly.',
    },
    {
      type: 'code',
      value: `
public class Duck {
    public void swim(){
        System.out.println("I\'m swimming");
    }',

    public void fly(){
        System.out.println("I\'m flying");
    }
}`,
    },
    {
      type: 'code',
      value: `
WildDuck wildDuck = new WildDuck();
CityDuck cityDuck = new CityDuck();
System.out.println("WildDuck says: " + wildDuck.fly());
System.out.println("CityDuck says: " + cityDuck.fly());
`,
    },
    {
      type: 'code',
      value: `
> WildDuck says: I'm flying
> CityDuck says: I'm flying`,
    },
    {
      type: 'paragraph',
      value:
        "All is going great, but you fail to realize that there's another subclass <code>RubberDuck</code> present in our system. And oh boy, it too has started flying.",
    },
    {
      type: 'code',
      value: 'public class RubberDuck extends Duck { }',
    },
    {
      type: 'code',
      value: `
RubberDuck rubberDuck = new RubberDuck();
System.out.println("RubberDuck says: " + rubberDuck.fly());`,
    },
    {
      type: 'code',
      value: `> RubberDuck says: I'm flying`,
    },
    {
      type: 'paragraph',
      value: `<strong>OH NO!!!</strong> That was unexpected. We don't see rubber ducks flying in real life.<br/>
          The boss is very angry and wants an immediate fix. What should we do?<br/>Well, we can simply override the fly behaviour in <code>RubberDuck</code> to make it not fly, and we are done for the day.`,
    },
    {
      type: 'code',
      value: `
public class RubberDuck extends Duck {
    @Override
    public void fly(){
        System.out.println("Sorry, I can\'t fly");
    }
}`,
    },
    {
      type: 'code',
      value: `
RubberDuck rubberDuck = new RubberDuck();
System.out.println("RubberDuck says: " + rubberDuck.swim());
System.out.println("RubberDuck says: " + rubberDuck.fly());
`,
    },
    {
      type: 'code',
      value: `
> RubberDuck says: I'm swimming
> RubberDuck says: Sorry, I can't fly
`,
    },
    {
      type: 'paragraph',
      value:
        'Your boss is happy again.<br/>Good job! You can give yourself a pat on the back.',
    },
    {
      type: 'paragraph',
      value:
        '<em>"But wait, there\'s more!"</em> your boss says. The company is planning to add more ducks into the system. Starting with ducks made of wood.<br/>Now, a hardwood duck can neither fly nor swim. Which means that we will have to override both <code>swim()</code> and <code>fly()</code> methods to make it not fly and swim.',
    },
    {
      type: 'code',
      value: `
public class WoddenDuck extends Duck {
    @Override
    public void fly(){
        System.out.println("Sorry, I can\'t fly");
    }

    @Override
    public void swim(){
        System.out.println("Sorry, I can\'t swim");
    }
}
`,
    },
    {
      type: 'code',
      value: `
WoddenDuck woddenDuck = new WoddenDuck();
System.out.println("WoddenDuck says: " + woddenDuck.swim());
System.out.println("WoddenDuck says: " + woddenDuck.fly());
`,
    },
    {
      type: 'code',
      value: `
> WoddenDuck says: Sorry, I can't swim
> WoddenDuck says: Sorry, I can't fly
`,
    },
    {
      type: 'paragraph',
      value:
        "It kind of works, but we can't go on and on overriding the methods in each subclass. And we are also duplicating a lot of code here in overriding methods that do the exact same thing. Here we have the same code in <code>fly()</code> method for both <code>RubberDuck</code> and <code>WoddenDuck</code>. The same check has to be done for each new method added in base class <code>Duck</code>.<br>It looks like our choice of design wasn't very useful in terms of flexibility and maintenance.",
    },
    {
      type: 'paragraph',
      value:
        'Inheritance is becoming a mess, and we are left with a lot of duplicate code with no reusability.',
    },
  ],
};

function getDuck1() {
  return `
public class Duck {
    public void swim(){
        System.out.println("I\'m swimimg");
    }
}`;
}
