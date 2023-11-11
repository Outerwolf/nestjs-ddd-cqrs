import {ValueObject} from "../../../../shared/domain/value-object/value-object";
import {v4 as uuid} from "uuid";
import validate from "uuid-validate";
import {InvalidArgumentError} from "../../../../shared/domain/value-object/invalid-argument-error";

export class Password extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureIsValidUuid(value);
    }

    private ensureIsValidUuid(id: string): void {
        if (!validate(id)) {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
        }
    }
}