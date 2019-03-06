using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SweepingManagement.Entities;

namespace SweepingManagement.DataLayer.Repository
{
    public interface IGenericRepository<T>  where T : BasicEntity
    {
        IQueryable<T> GetAll();

        T GetById(int id);

        void Create(T entity);

        void Update(T entity);

        void Delete(int id);
    }
}