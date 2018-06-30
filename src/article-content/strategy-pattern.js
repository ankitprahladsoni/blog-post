export default [
  {
    id: 1,
    components: [
      {
        type: 'subHeading',
        value: 'What is it?',
      },
      {
        type: 'paragraph',
        value:
          'According to <a href="https://en.wikipedia.org/wiki/Strategy_pattern">Wikipedia</a>, <em>Strategy pattern is a behavioural software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.</em>',
      },
      {
        type: 'paragraph',
        value:
          "Don't know about you guys, but I sure didn't understand this definition when I first read it. So let's try to understand it with an example.",
      },
    ],
  },
  {
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
        value: `
public class Duck {
    public void swim(){
         System.out.println("I\'m swimimg");
    }
}`,
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
  },
  {
    id: 3,
    components: [
      {
        type: 'subHeading',
        value: 'The solution',
      },
      {
        type: 'paragraph',
        value:
          'As we know that many more kinds of ducks will be coming into our system with different behaviours, why not make those behaviours as class variables, which can be easily passed to an object?<br/>But how do we pass these methods as variables you ask?',
      },
      {
        type: 'paragraph',
        value:
          'Enters the <em>STRATEGY PATTERN</em>.<br/>As per the definition, let\'s make our class select algorithms/strategies/behaviour at runtime. In our case, fly and swim can be of different behaviours. Instead of passing them using <em><a href="https://en.wikipedia.org/wiki/Is-a">IS-A</a></em> relationship from parent to child, let\'s inject these behaviours using <em><a href="https://en.wikipedia.org/wiki/Has-a">HAS-A</a></em> relationship.',
      },
      {
        type: 'paragraph',
        value:
          'We will create interfaces <code>FlyBehaviour</code> and <code>SwimBehaviour</code> and use them as variables in our <code>Duck</code> class. <code>FlyBehaviour</code> may have multiple implementations such as <code>FlyWithWingsBehavior</code> and <code>NoFlyBehaviour</code>. Same with <code>SwimBehaviour</code> as shown below.',
      },
      {
        type: 'paragraph',
        value: '<code>FlyBehaviour</code> and its implementations',
      },
      {
        type: 'code',
        value: `
public interface FlyBehaviour {
    public void fly();
}
`,
      },
      {
        type: 'code',
        value: `
public class FlyWithWingsBehaviour implements FlyBehaviour {
    @Override
    public void fly(){
        System.out.println("I\'m flying with wings");
    }
}
`,
      },
      {
        type: 'code',
        value: `
public class NoFlyBehaviour implements FlyBehaviour {
    @Override
    public void fly(){
        System.out.println("Sorry, I can\'t fly");
    }
}
`,
      },
      {
        type: 'paragraph',
        value: '<code>SwimBehaviour</code> and its implementations',
      },
      {
        type: 'code',
        value: `
public interface SwimBehaviour {
    public void swim();
}
`,
      },
      {
        type: 'code',
        value: `
public class SwimWithFeetBehaviour implements SwimBehaviour {
    @Override
    public void swim(){
        System.out.println("I\'m swimming with my webbed feet");
    }
}
`,
      },
      {
        type: 'code',
        value: `
public class NoSwimBehaviour implements SwimBehaviour {
    @Override
    public void swim(){
        System.out.println("Sorry, I can\'t swim");
    }
}
`,
      },
      {
        type: 'paragraph',
        value: 'We define our new <code>Duck</code> class as:',
      },
      {
        type: 'code',
        value: `
public class Duck {
    FlyBehaviour flyBehaviour;
    SwimBehaviour swimBehaviour;

    public Duck(FlyBehaviour fb, SwimBehaviour sb){
        flyBehaviour = fb;
        swimBehaviour = sb;
    }

    public void performFly(){
        flyBehaviour.fly();
    }

    public void performSwim(){
        swimBehaviour.swim();
    }
}
`,
      },
      {
        type: 'paragraph',
        value:
          'Here, we are injecting the behaviours via a constructor. We can use this class as:',
      },
      {
        type: 'code',
        value: `
Duck cityDuck = new Duck(new FlyWithWingsBehaviour(), new SwimWithFeetBehaviour());
System.out.println("CityDuck says: " + cityDuck.performFly());
System.out.println("CityDuck says: " + cityDuck.performSwim());

Duck woddenDuck = new Duck(new NoFlyBehaviour(), new NoSwimBehaviour());
System.out.println("WoddenDuck says: " + woddenDuck.performFly());
System.out.println("WoddenDuck says: " + woddenDuck.performSwim());
`,
      },
      {
        type: 'code',
        value: `
 > CityDuck says: I'm flying with wings
 > CityDuck says: I'm swimming with my webbed feet
 > WoddenDuck says: Sorry, I can't fly
 > WoddenDuck says: Sorry, I can't swim
`,
      },
      {
        type: 'paragraph',
        value:
          "Cool, isn't it? We no longer have to worry about many subclasses of <code>Duck</code>, because we have <strong>none</strong>. At the same time, we can create as many ducks as we want, with many combinations of flying and swimming behaviours, without worrying if it's going to break the functionality of other ducks.<br/>Not only that, if we were to have setters for each behaviour, we can simply change the behaviour at runtime by giving a new instance of the behaviour to the duck.<br/>For example, we want our ducks to fly using a rocket booster instead of wings, then we just have to create a new behaviour <code>FlyWithRocketBehaviour</code>, and set it to our <code>Duck</code> object.",
      },
      {
        type: 'code',
        value: `
public class Duck {
    FlyBehaviour flyBehaviour;
    SwimBehaviour swimBehaviour;
    //setters for behaviours
}
`,
      },
      {
        type: 'code',
        value: `
public class FlyWithRocketBehaviour implements FlyBehaviour {
    @Override
    public void fly(){
        System.out.println("I\'m flying with my rocket boosters");
    }
}
`,
      },
      {
        type: 'code',
        value: `
Duck cityDuck = new Duck(new FlyWithWingsBehaviour(), new SwimWithFeetBehaviour());
System.out.println("CityDuck says: " + cityDuck.performFly());
cityDuck.setFlyBehaviour(new FlyWithRocketBehaviour())
System.out.println("CityDuck says: " + cityDuck.performFly());
`,
      },
      {
        type: 'code',
        value: `
> CityDuck says: I'm flying with wings
> CityDuck says: I'm flying with my rocket boosters
`,
      },
      {
        type: 'paragraph',
        value: `Instead of creating different duck classes, we can have a single duck class with behaviour/strategies than can be easily plugged into them. Just like building a duck using Lego blocks.<br/>
        Now go out and show off your new skills to your colleagues and make them envy you.`,
      },
    ],
  },
  {
    id: 4,
    components: [
      {
        type: 'subHeading',
        value: 'Other examples',
      },
      {
        type: 'paragraph',
        value: `<em>"Hey, I don't code ducks daily at work".</em> Well, who does? And there are already many places where you can use the Strategy Pattern, like:<br/>
          <ul>
          <li>&#183 Sorting list with different strategies. <code>Collections.sort(list, Collections.reverseOrder());</code></li>
          <li>&#183 Zipping a file using different zipping techniques.</li>
          <li>&#183 Storing content to DB, XML or CSV</li>
          <li>&#183 A taxi service charging a customer based on the time of the day. Day charges and night charges.</li>
          </ul>`,
      },
    ],
  },
  {
    id: 5,
    components: [
      {
        type: 'subHeading',
        value: 'Conclusion',
      },
      {
        type: 'paragraph',
        value: 'TODO',
      },
    ],
  },
];
