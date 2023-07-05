
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type ExampleDBPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ExampleDB"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: string
    referredType: string
    example: string
    ts: string | null
  }, ExtArgs["result"]["exampleDB"]>
  composites: {}
}

/**
 * Model ExampleDB
 * 
 */
export type ExampleDB = runtime.Types.DefaultSelection<ExampleDBPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ExampleDBS
 * const exampleDBS = await prisma.exampleDB.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ExampleDBS
   * const exampleDBS = await prisma.exampleDB.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.exampleDB`: Exposes CRUD operations for the **ExampleDB** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExampleDBS
    * const exampleDBS = await prisma.exampleDB.findMany()
    * ```
    */
  get exampleDB(): Prisma.ExampleDBDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ExampleDB: 'ExampleDB'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'exampleDB'
      txIsolationLevel: never
    },
    model: {
      ExampleDB: {
        payload: ExampleDBPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ExampleDBFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExampleDBFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload>
          }
          findFirst: {
            args: Prisma.ExampleDBFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExampleDBFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload>
          }
          findMany: {
            args: Prisma.ExampleDBFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload>[]
          }
          create: {
            args: Prisma.ExampleDBCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload>
          }
          createMany: {
            args: Prisma.ExampleDBCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExampleDBDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload>
          }
          update: {
            args: Prisma.ExampleDBUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload>
          }
          deleteMany: {
            args: Prisma.ExampleDBDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExampleDBUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExampleDBUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExampleDBPayload>
          }
          aggregate: {
            args: Prisma.ExampleDBAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExampleDB>
          }
          groupBy: {
            args: Prisma.ExampleDBGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExampleDBGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExampleDBFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExampleDBAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ExampleDBCountArgs<ExtArgs>,
            result: $Utils.Optional<ExampleDBCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ExampleDB
   */


  export type AggregateExampleDB = {
    _count: ExampleDBCountAggregateOutputType | null
    _min: ExampleDBMinAggregateOutputType | null
    _max: ExampleDBMaxAggregateOutputType | null
  }

  export type ExampleDBMinAggregateOutputType = {
    id: string | null
    referredType: string | null
    example: string | null
    ts: string | null
  }

  export type ExampleDBMaxAggregateOutputType = {
    id: string | null
    referredType: string | null
    example: string | null
    ts: string | null
  }

  export type ExampleDBCountAggregateOutputType = {
    id: number
    referredType: number
    example: number
    ts: number
    _all: number
  }


  export type ExampleDBMinAggregateInputType = {
    id?: true
    referredType?: true
    example?: true
    ts?: true
  }

  export type ExampleDBMaxAggregateInputType = {
    id?: true
    referredType?: true
    example?: true
    ts?: true
  }

  export type ExampleDBCountAggregateInputType = {
    id?: true
    referredType?: true
    example?: true
    ts?: true
    _all?: true
  }

  export type ExampleDBAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExampleDB to aggregate.
     */
    where?: ExampleDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleDBS to fetch.
     */
    orderBy?: Enumerable<ExampleDBOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExampleDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExampleDBS
    **/
    _count?: true | ExampleDBCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExampleDBMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExampleDBMaxAggregateInputType
  }

  export type GetExampleDBAggregateType<T extends ExampleDBAggregateArgs> = {
        [P in keyof T & keyof AggregateExampleDB]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExampleDB[P]>
      : GetScalarType<T[P], AggregateExampleDB[P]>
  }




  export type ExampleDBGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExampleDBWhereInput
    orderBy?: Enumerable<ExampleDBOrderByWithAggregationInput>
    by: ExampleDBScalarFieldEnum[]
    having?: ExampleDBScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExampleDBCountAggregateInputType | true
    _min?: ExampleDBMinAggregateInputType
    _max?: ExampleDBMaxAggregateInputType
  }


  export type ExampleDBGroupByOutputType = {
    id: string
    referredType: string
    example: string
    ts: string | null
    _count: ExampleDBCountAggregateOutputType | null
    _min: ExampleDBMinAggregateOutputType | null
    _max: ExampleDBMaxAggregateOutputType | null
  }

  type GetExampleDBGroupByPayload<T extends ExampleDBGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExampleDBGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExampleDBGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExampleDBGroupByOutputType[P]>
            : GetScalarType<T[P], ExampleDBGroupByOutputType[P]>
        }
      >
    >


  export type ExampleDBSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referredType?: boolean
    example?: boolean
    ts?: boolean
  }, ExtArgs["result"]["exampleDB"]>

  export type ExampleDBSelectScalar = {
    id?: boolean
    referredType?: boolean
    example?: boolean
    ts?: boolean
  }


  type ExampleDBGetPayload<S extends boolean | null | undefined | ExampleDBArgs> = $Types.GetResult<ExampleDBPayload, S>

  type ExampleDBCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExampleDBFindManyArgs, 'select' | 'include'> & {
      select?: ExampleDBCountAggregateInputType | true
    }

  export interface ExampleDBDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExampleDB'], meta: { name: 'ExampleDB' } }
    /**
     * Find zero or one ExampleDB that matches the filter.
     * @param {ExampleDBFindUniqueArgs} args - Arguments to find a ExampleDB
     * @example
     * // Get one ExampleDB
     * const exampleDB = await prisma.exampleDB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExampleDBFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExampleDBFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ExampleDB'> extends True ? Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ExampleDB that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExampleDBFindUniqueOrThrowArgs} args - Arguments to find a ExampleDB
     * @example
     * // Get one ExampleDB
     * const exampleDB = await prisma.exampleDB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExampleDBFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExampleDBFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ExampleDB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleDBFindFirstArgs} args - Arguments to find a ExampleDB
     * @example
     * // Get one ExampleDB
     * const exampleDB = await prisma.exampleDB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExampleDBFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExampleDBFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ExampleDB'> extends True ? Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ExampleDB that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleDBFindFirstOrThrowArgs} args - Arguments to find a ExampleDB
     * @example
     * // Get one ExampleDB
     * const exampleDB = await prisma.exampleDB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExampleDBFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExampleDBFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ExampleDBS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleDBFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExampleDBS
     * const exampleDBS = await prisma.exampleDB.findMany()
     * 
     * // Get first 10 ExampleDBS
     * const exampleDBS = await prisma.exampleDB.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exampleDBWithIdOnly = await prisma.exampleDB.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExampleDBFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExampleDBFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ExampleDB.
     * @param {ExampleDBCreateArgs} args - Arguments to create a ExampleDB.
     * @example
     * // Create one ExampleDB
     * const ExampleDB = await prisma.exampleDB.create({
     *   data: {
     *     // ... data to create a ExampleDB
     *   }
     * })
     * 
    **/
    create<T extends ExampleDBCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExampleDBCreateArgs<ExtArgs>>
    ): Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ExampleDBS.
     *     @param {ExampleDBCreateManyArgs} args - Arguments to create many ExampleDBS.
     *     @example
     *     // Create many ExampleDBS
     *     const exampleDB = await prisma.exampleDB.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExampleDBCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExampleDBCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExampleDB.
     * @param {ExampleDBDeleteArgs} args - Arguments to delete one ExampleDB.
     * @example
     * // Delete one ExampleDB
     * const ExampleDB = await prisma.exampleDB.delete({
     *   where: {
     *     // ... filter to delete one ExampleDB
     *   }
     * })
     * 
    **/
    delete<T extends ExampleDBDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExampleDBDeleteArgs<ExtArgs>>
    ): Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ExampleDB.
     * @param {ExampleDBUpdateArgs} args - Arguments to update one ExampleDB.
     * @example
     * // Update one ExampleDB
     * const exampleDB = await prisma.exampleDB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExampleDBUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExampleDBUpdateArgs<ExtArgs>>
    ): Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ExampleDBS.
     * @param {ExampleDBDeleteManyArgs} args - Arguments to filter ExampleDBS to delete.
     * @example
     * // Delete a few ExampleDBS
     * const { count } = await prisma.exampleDB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExampleDBDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExampleDBDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExampleDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleDBUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExampleDBS
     * const exampleDB = await prisma.exampleDB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExampleDBUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExampleDBUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExampleDB.
     * @param {ExampleDBUpsertArgs} args - Arguments to update or create a ExampleDB.
     * @example
     * // Update or create a ExampleDB
     * const exampleDB = await prisma.exampleDB.upsert({
     *   create: {
     *     // ... data to create a ExampleDB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExampleDB we want to update
     *   }
     * })
    **/
    upsert<T extends ExampleDBUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExampleDBUpsertArgs<ExtArgs>>
    ): Prisma__ExampleDBClient<$Types.GetResult<ExampleDBPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Find zero or more ExampleDBS that matches the filter.
     * @param {ExampleDBFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const exampleDB = await prisma.exampleDB.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ExampleDBFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ExampleDB.
     * @param {ExampleDBAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const exampleDB = await prisma.exampleDB.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ExampleDBAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ExampleDBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleDBCountArgs} args - Arguments to filter ExampleDBS to count.
     * @example
     * // Count the number of ExampleDBS
     * const count = await prisma.exampleDB.count({
     *   where: {
     *     // ... the filter for the ExampleDBS we want to count
     *   }
     * })
    **/
    count<T extends ExampleDBCountArgs>(
      args?: Subset<T, ExampleDBCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExampleDBCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExampleDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleDBAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExampleDBAggregateArgs>(args: Subset<T, ExampleDBAggregateArgs>): Prisma.PrismaPromise<GetExampleDBAggregateType<T>>

    /**
     * Group by ExampleDB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleDBGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExampleDBGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleDBGroupByArgs['orderBy'] }
        : { orderBy?: ExampleDBGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExampleDBGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExampleDBGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ExampleDB.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExampleDBClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ExampleDB base type for findUnique actions
   */
  export type ExampleDBFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * Filter, which ExampleDB to fetch.
     */
    where: ExampleDBWhereUniqueInput
  }

  /**
   * ExampleDB findUnique
   */
  export interface ExampleDBFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExampleDBFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExampleDB findUniqueOrThrow
   */
  export type ExampleDBFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * Filter, which ExampleDB to fetch.
     */
    where: ExampleDBWhereUniqueInput
  }


  /**
   * ExampleDB base type for findFirst actions
   */
  export type ExampleDBFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * Filter, which ExampleDB to fetch.
     */
    where?: ExampleDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleDBS to fetch.
     */
    orderBy?: Enumerable<ExampleDBOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExampleDBS.
     */
    cursor?: ExampleDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExampleDBS.
     */
    distinct?: Enumerable<ExampleDBScalarFieldEnum>
  }

  /**
   * ExampleDB findFirst
   */
  export interface ExampleDBFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExampleDBFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExampleDB findFirstOrThrow
   */
  export type ExampleDBFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * Filter, which ExampleDB to fetch.
     */
    where?: ExampleDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleDBS to fetch.
     */
    orderBy?: Enumerable<ExampleDBOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExampleDBS.
     */
    cursor?: ExampleDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleDBS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExampleDBS.
     */
    distinct?: Enumerable<ExampleDBScalarFieldEnum>
  }


  /**
   * ExampleDB findMany
   */
  export type ExampleDBFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * Filter, which ExampleDBS to fetch.
     */
    where?: ExampleDBWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExampleDBS to fetch.
     */
    orderBy?: Enumerable<ExampleDBOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExampleDBS.
     */
    cursor?: ExampleDBWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExampleDBS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExampleDBS.
     */
    skip?: number
    distinct?: Enumerable<ExampleDBScalarFieldEnum>
  }


  /**
   * ExampleDB create
   */
  export type ExampleDBCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * The data needed to create a ExampleDB.
     */
    data: XOR<ExampleDBCreateInput, ExampleDBUncheckedCreateInput>
  }


  /**
   * ExampleDB createMany
   */
  export type ExampleDBCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExampleDBS.
     */
    data: Enumerable<ExampleDBCreateManyInput>
  }


  /**
   * ExampleDB update
   */
  export type ExampleDBUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * The data needed to update a ExampleDB.
     */
    data: XOR<ExampleDBUpdateInput, ExampleDBUncheckedUpdateInput>
    /**
     * Choose, which ExampleDB to update.
     */
    where: ExampleDBWhereUniqueInput
  }


  /**
   * ExampleDB updateMany
   */
  export type ExampleDBUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExampleDBS.
     */
    data: XOR<ExampleDBUpdateManyMutationInput, ExampleDBUncheckedUpdateManyInput>
    /**
     * Filter which ExampleDBS to update
     */
    where?: ExampleDBWhereInput
  }


  /**
   * ExampleDB upsert
   */
  export type ExampleDBUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * The filter to search for the ExampleDB to update in case it exists.
     */
    where: ExampleDBWhereUniqueInput
    /**
     * In case the ExampleDB found by the `where` argument doesn't exist, create a new ExampleDB with this data.
     */
    create: XOR<ExampleDBCreateInput, ExampleDBUncheckedCreateInput>
    /**
     * In case the ExampleDB was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExampleDBUpdateInput, ExampleDBUncheckedUpdateInput>
  }


  /**
   * ExampleDB delete
   */
  export type ExampleDBDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
    /**
     * Filter which ExampleDB to delete.
     */
    where: ExampleDBWhereUniqueInput
  }


  /**
   * ExampleDB deleteMany
   */
  export type ExampleDBDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExampleDBS to delete
     */
    where?: ExampleDBWhereInput
  }


  /**
   * ExampleDB findRaw
   */
  export type ExampleDBFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ExampleDB aggregateRaw
   */
  export type ExampleDBAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ExampleDB without action
   */
  export type ExampleDBArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExampleDB
     */
    select?: ExampleDBSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const ExampleDBScalarFieldEnum: {
    id: 'id',
    referredType: 'referredType',
    example: 'example',
    ts: 'ts'
  };

  export type ExampleDBScalarFieldEnum = (typeof ExampleDBScalarFieldEnum)[keyof typeof ExampleDBScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type ExampleDBWhereInput = {
    AND?: Enumerable<ExampleDBWhereInput>
    OR?: Enumerable<ExampleDBWhereInput>
    NOT?: Enumerable<ExampleDBWhereInput>
    id?: StringFilter | string
    referredType?: StringFilter | string
    example?: StringFilter | string
    ts?: StringNullableFilter | string | null
  }

  export type ExampleDBOrderByWithRelationInput = {
    id?: SortOrder
    referredType?: SortOrder
    example?: SortOrder
    ts?: SortOrder
  }

  export type ExampleDBWhereUniqueInput = {
    id?: string
  }

  export type ExampleDBOrderByWithAggregationInput = {
    id?: SortOrder
    referredType?: SortOrder
    example?: SortOrder
    ts?: SortOrder
    _count?: ExampleDBCountOrderByAggregateInput
    _max?: ExampleDBMaxOrderByAggregateInput
    _min?: ExampleDBMinOrderByAggregateInput
  }

  export type ExampleDBScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExampleDBScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExampleDBScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExampleDBScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    referredType?: StringWithAggregatesFilter | string
    example?: StringWithAggregatesFilter | string
    ts?: StringNullableWithAggregatesFilter | string | null
  }

  export type ExampleDBCreateInput = {
    id?: string
    referredType: string
    example: string
    ts?: string | null
  }

  export type ExampleDBUncheckedCreateInput = {
    id?: string
    referredType: string
    example: string
    ts?: string | null
  }

  export type ExampleDBUpdateInput = {
    referredType?: StringFieldUpdateOperationsInput | string
    example?: StringFieldUpdateOperationsInput | string
    ts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleDBUncheckedUpdateInput = {
    referredType?: StringFieldUpdateOperationsInput | string
    example?: StringFieldUpdateOperationsInput | string
    ts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleDBCreateManyInput = {
    id?: string
    referredType: string
    example: string
    ts?: string | null
  }

  export type ExampleDBUpdateManyMutationInput = {
    referredType?: StringFieldUpdateOperationsInput | string
    example?: StringFieldUpdateOperationsInput | string
    ts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExampleDBUncheckedUpdateManyInput = {
    referredType?: StringFieldUpdateOperationsInput | string
    example?: StringFieldUpdateOperationsInput | string
    ts?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type ExampleDBCountOrderByAggregateInput = {
    id?: SortOrder
    referredType?: SortOrder
    example?: SortOrder
    ts?: SortOrder
  }

  export type ExampleDBMaxOrderByAggregateInput = {
    id?: SortOrder
    referredType?: SortOrder
    example?: SortOrder
    ts?: SortOrder
  }

  export type ExampleDBMinOrderByAggregateInput = {
    id?: SortOrder
    referredType?: SortOrder
    example?: SortOrder
    ts?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}