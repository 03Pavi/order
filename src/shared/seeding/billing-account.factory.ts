import { BillingAccount } from "../../entities";
import { setSeederFactory } from "typeorm-extension";


// faker is use to create fake values
export const BillingAccountFactory= setSeederFactory(BillingAccount, (faker) => {
    const billingAccount = new BillingAccount();
    billingAccount.card_number = faker.finance.creditCardNumber().replace(/\D/g, '').slice(0, 16);
    billingAccount.balance = +faker.commerce.price({ min: 1000, max: 100000 });
    console.log("Generated card number:", billingAccount.card_number);
    return billingAccount;
});