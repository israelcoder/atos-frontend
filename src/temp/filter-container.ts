export type FilterValue = string | number | boolean | null | undefined;

export class FilterContainer {
  private filters = new Map<string, FilterValue>();

  constructor(initialFilters?: Record<string, FilterValue>) {
    if (initialFilters) this.setFilters(initialFilters);
  }

  public get serialized() {
    return Object.fromEntries(this.filters);
  }

  public setFilters(filters: Record<string, FilterValue>) {
    this.filters = new Map(Object.entries(filters));
  }

  public setFilter(name: string, value: FilterValue) {
    this.filters.set(name, value);
  }

  public removeFilter(name: string) {
    if (!this.filters.has(name)) return;
    this.filters.delete(name);
  }
}
