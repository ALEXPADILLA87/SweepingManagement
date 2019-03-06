using SweepingManagement.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SweepingManagement.DataLayer.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BasicEntity
    {
        private readonly SweepingEntities _dbContext;

        public GenericRepository()
        {
            _dbContext = new SweepingEntities();
        }

        public void Create(T entity)
        {
            using (var dbContextTransaction = _dbContext.Database.BeginTransaction())
            {
                try
                {
                    _dbContext.Set<T>().Add(entity);
                    _dbContext.SaveChanges();
                    dbContextTransaction.Commit();
                }
                catch (Exception e)
                {
                    dbContextTransaction.Rollback();
                    throw;
                }
            }
        }

        public void Delete(int id)
        {
            using (var dbContextTransaction = _dbContext.Database.BeginTransaction())
            {
                try
                {
                    var entity = GetById(id);
                    _dbContext.Set<T>().Remove(entity);
                    _dbContext.SaveChanges();
                    dbContextTransaction.Commit();
                }
                catch (Exception e)
                {
                    dbContextTransaction.Rollback();
                    throw;
                }
            }
        }

        public IQueryable<T> GetAll()
        {
            try
            {
                return _dbContext.Set<T>();
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public T GetById(int id)
        {
            try
            {
                return GetAll().FirstOrDefault(x => x.Id == id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Update(T entity)
        {
            using (var dbContextTransaction = _dbContext.Database.BeginTransaction())
            {
                try
                {
                    _dbContext.Entry(entity).State = EntityState.Modified;
                    _dbContext.SaveChanges();
                    dbContextTransaction.Commit();
                }
                catch (Exception e)
                {
                    dbContextTransaction.Rollback();
                    throw;
                }
            }
        }
    }
}