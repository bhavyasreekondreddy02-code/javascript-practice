class Gems
{
    Stone(){
        return "this is gem stones "
    }
}
class ruby extends Gems
{
    Stone()
    {
        return "I am Red";
    }


}
class pearl extends Gems
{
    Stone()
    {
        return "I am white"
    }
}
class Emerald extends Gems
{
    Stone()
    {
        return "I am Green"
    }
}
//variable
let s = new Gems();
console.log(s.Stone());

s = new Emerald();
console.log(s.Stone());

s = new ruby();
console.log(s.Stone());

s = new pearl();
console.log(s.Stone());
