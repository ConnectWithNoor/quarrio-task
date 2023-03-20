import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  //  dummy response data
  const data = [
    {
      name: 'selectClause',
      label: 'Select Clause',
      stepInfo: ' Axiom -> domainConcepts and QuerySelectClauseList',
      dataFields: [
        {
          errorCategory: 'Error Category',
          concept: 'Concept',
        },
      ],
      dataFieldValues: [
        {
          errorCategory: '',
          concept: '',
        },
      ],
      errorCategories: [
        'DAL select clause DB column missing',
        ' DAL select clause DB column incorrect',
        'DAL select clause alias incorrect',
      ],
      axiomsMapping: ['domainConcept'],
      queryObjectMaping: ['querySelectClauseList'],
    },
    {
      name: 'orderClause',
      label: 'Order By Clause',
      stepInfo: ' Axiom->sorting and QueryOrderByClauseList',

      dataFields: [
        {
          errorCategory: 'Error Category',
          concept: 'Concept',
        },
      ],
      dataFieldValues: [
        {
          errorCategory: '',
          concept: '',
        },
      ],
      errorCategories: [
        'DAL orderby clause missing',
        'DAL orderby clause incorrect - orderby column',
        'DAL orderby clause incorrect - aggregation ',
        'DAL orderby clause incorrect – order',
        'DAL orderby clause incorrect – limit',
      ],
      axiomsMapping: ['sorting'],
      queryObjectMaping: ['queryOrderByClauseList'],
    },
    {
      name: 'whereClause',
      label: 'Where Clause',
      stepInfo: ' Axiom -> conditions | QueryWhereClauseList',
      dataFields: [
        {
          errorCategory: 'Error Category',
          concept: 'Concept',
        },
      ],
      dataFieldValues: [
        {
          errorCategory: '',
          concept: '',
        },
      ],
      errorCategories: [
        'DAL condition clause missing',
        'DAL condition clause incorrect - DB Column',
        'DAL condition clause incorrect - relation',
        'DAL condition clause incorrect - value',
        'DAL condition clause incorrect - inter condition relation',
      ],
      axiomsMapping: ['conditions'],
      queryObjectMaping: ['queryWhereClauseList'],
    },
    {
      name: 'groupClause',
      label: 'Group By Clause',
      stepInfo: 'Axiom -> group against QueryGroupByList',
      dataFields: [
        {
          errorCategory: 'Error Category',
          concept: 'Concept',
        },
      ],
      dataFieldValues: [
        {
          errorCategory: '',
          concept: '',
        },
      ],
      errorCategories: [
        'DAL groupby clause DB column missing',
        ' DAL groupby clause DB column incorrect',
      ],
      axiomsMapping: ['group'],
      queryObjectMaping: ['queryGroupByList'],
    },
    {
      name: 'fromClause',
      label: 'From Clause',
      stepInfo:
        'queryObject -> QuerySelectClauseList, QueryOrderByClauseList, QueryGroupByList , QueryWhereClauseList against QueryFromClauseTableList',
      dataFields: [
        {
          errorCategory: 'Error Category',
          concept: 'Concept',
        },
      ],
      dataFieldValues: [
        {
          errorCategory: '',
          concept: '',
        },
      ],
      errorCategories: [
        'DAL from clause incorrect - select',
        'DAL from clause incorrect - where',
        'DAL from clause incorrect - orderby',
        'DAL from clause incorrect - group by',
      ],
      axiomsMapping: ['group'],
      queryObjectMaping: [
        'querySelectClauseList',
        'queryOrderByClauseList',
        'queryGroupByList',
        'queryWhereClauseList',
        'queryFromClauseTableList',
      ],
    },
  ];

  return NextResponse.json(data, {
    status: 200,
  });
}
