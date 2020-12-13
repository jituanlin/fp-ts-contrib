import * as D from 'io-ts/lib/Decoder'

type Schema = Record<string, D.Decoder<any, string | number | null | undefined | boolean | bigint>>

export const table: <S extends Schema>(
  schema: S
) => (input: unknown) => { [K in keyof S]: string } = schema => input => {

}
