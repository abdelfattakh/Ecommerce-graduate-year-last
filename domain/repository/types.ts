export interface CrudOperations<TypedSchemaMember> {
  create(member: TypedSchemaMember): Promise<TypedSchemaMember | null>;
  update(member: Partial<TypedSchemaMember>): Promise<TypedSchemaMember | null>;
  delete(id: number): Promise<number | null>;
  get(id: number): Promise<TypedSchemaMember | null>;
  getAll(): Promise<TypedSchemaMember[] | null>;
}
