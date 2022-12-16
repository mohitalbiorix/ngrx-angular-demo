import { CounterModel } from "./model/counter.model";

export interface  CounterState{
    readonly counterStore: CounterModel[];
}