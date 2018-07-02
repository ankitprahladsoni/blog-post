export default {
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
      value: `Cool, isn't it? We no longer have to worry about many subclasses of <code>Duck</code>, because we have <strong>none</strong>. At the same time, we can create as many ducks as we want, with many combinations of flying and swimming behaviours, without worrying if it's going to break the         functionality of other ducks.<br/>
        Not only that, if we were to have setters for each behaviour, we can simply change the behaviour at runtime by giving a new instance of the behaviour to the duck.<br/>For example, we want our ducks to fly using a rocket booster instead of wings, then we just have to create a new behaviour <code>FlyWithRocketBehaviour</code>, and set it to our <code>Duck</code> object.`,
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
};
