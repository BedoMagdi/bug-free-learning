public class Droid {
    private int batteryLevel;
    private String name;
  
    public Droid(String droidName){
      this.name = droidName;
      this.batteryLevel = 100;
    }
  
    public void performTask(String task){
      System.out.println(this.name + " is performing task: " + task);
      this.batteryLevel -= 10;
    }
  
    public void energyReport(){
       System.out.println(this.name + "'s battery level is: " + this.batteryLevel);
    }
  
    public String toString(){
      return "Hello, I’m the droid: " + this.name;
    }
  
      public static void main(String args[]) {
        Droid codey = new Droid("Codey");
        System.out.println(codey);
        codey.performTask("dancing");
        codey.performTask("cooking");
        codey.performTask("playing golf");
        codey.energyReport();
      }
  }