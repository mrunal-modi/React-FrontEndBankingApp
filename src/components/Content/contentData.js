const content = {
  Home: {
    title: "Banking Workflow",
    steps: ["Navbar > Click Create Account", "Navbar > Click Login", "Navbar > Click Deposit | Withdraw"]
  },
  Create: {
    title: "Create Account",
    steps: ["Enter Name, Email, Password","Click Submit"]
  },
  Login: {
    title: "Login to Account",
    steps: ["Created Account?", "Enter Email, Password","Click Submit"]
  },
  Deposit: {
    title: "Deposit Amount",
    steps: ["Create Account + Login?", "Enter Amount","Click Deposit"]
  },
  Withdraw: {
    title: "Withdraw Amount",
    steps: ["Create Account + Login?", "Enter Amount","Click Withdraw"]
  },
  AllData: {
    title: "View All Data",
    steps: ["Login?","Username: admin@admin.edu | Password: secret"]
  }
}
  export default content;