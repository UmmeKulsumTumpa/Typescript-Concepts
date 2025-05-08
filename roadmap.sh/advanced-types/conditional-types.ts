/**
 * type SomeType = T extends U ? X : Y
 * what does this mean? it means if SomeType T is assignable to SomeType U, 
 * Then chose type X, otherwise chose type Y
 */

type SomeTypeT = string;
type MyConditionalType = SomeTypeT extends string ? string : null; // as SomeTypes T is string, so MyConditionalType is also string now
// if we change sometype to any other type, it will be null

// conditional type inside function
function someFunction<T>(val: T){
    const innerFunc = (
        someArgs: T extends boolean ? 'Type Bool' : 'Type Fool'
    ) => {
        const storeArgs: 'Type Bool' | 'Type Fool' = someArgs; // OK, gives no error
        // const storeArgsOfOneTYpe: 'Type Bool' = someArgs; // error, because we donno yet what the type will be for someArgs, so if T extends to boolean, it would be Type Bool otherwise it will be Type Fool, so we get error here
    }

    return innerFunc;
}

const foolRes = someFunction(""); // get Type Fool
const boolRes = someFunction(true); // get Type Bool
